import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  albumId = 0;
  title = '';
  loading = true;
  saving = false;
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
      this.fetchAlbum(id);
    });
  }

  fetchAlbum(id: number): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.title = album.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album details.';
        this.loading = false;
      },
    });
  }

  save(): void {
    if (!this.album) {
      return;
    }

    const trimmedTitle = this.title.trim();
    if (!trimmedTitle) {
      this.error = 'Title cannot be empty.';
      return;
    }

    this.saving = true;
    this.error = '';

    const updatedAlbum: Album = {
      ...this.album,
      title: trimmedTitle,
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.title = album.title;
        this.saving = false;
      },
      error: () => {
        this.error = 'Failed to save album title.';
        this.saving = false;
      },
    });
  }
}
