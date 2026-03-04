import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';
  deletingIds = new Set<number>();

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.error = '';
    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums. Please try again.';
        this.loading = false;
      },
    });
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.deletingIds.has(id)) {
      return;
    }

    this.deletingIds.add(id);
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== id);
        this.deletingIds.delete(id);
      },
      error: () => {
        this.error = 'Failed to delete album. Please try again.';
        this.deletingIds.delete(id);
      },
    });
  }

  trackById(_index: number, album: Album): number {
    return album.id;
  }
}
