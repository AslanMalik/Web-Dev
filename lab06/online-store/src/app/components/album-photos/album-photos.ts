import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!Number.isFinite(id)) {
        this.error = 'Invalid album id.';
        this.loading = false;
        return;
      }

      this.albumId = id;
      this.fetchPhotos(id);
    });
  }

  fetchPhotos(id: number): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load photos.';
        this.loading = false;
      },
    });
  }
}
