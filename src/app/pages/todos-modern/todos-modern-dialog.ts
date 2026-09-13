import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TodosService } from '../../services/todos-service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Todo } from '../../interfaces/todo.interface';

interface TodoForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
}

@Component({
  selector: 'app-todos-modern-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './todos-modern-dialog.html',
  styleUrl: './todos-modern-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosModernDialogComponent {
  private fb = inject(FormBuilder);
  private todosService = inject(TodosService);
  private snack = inject(MatSnackBar);
  public dialogRef = inject(MatDialogRef<TodosModernDialogComponent>);

  form = this.fb.group<TodoForm>({
    name: this.fb.control('', { validators: [Validators.required, Validators.maxLength(100)] }),
    description: this.fb.control('', { validators: [Validators.required, Validators.maxLength(500)] }),
  });

  onSubmit() {
    if (this.form.invalid) return;
    const { name, description } = this.form.value;
    this.todosService.createTodo({ name: name!, description: description!, completed: false }).subscribe({
      next: (todo: Todo) => {
        this.dialogRef.close(todo);
      },
      error: (err) => {
        console.error('Failed to create todo from dialog', err);
        const isBackendSleeping = err && (err.status === 0 || err.status === 503 || err.status === 504);
        const message = isBackendSleeping ? 'Failed to create todo. Is the backend sleeping maybe?' : 'Failed to create todo';
        this.snack.open(message, 'Close', { duration: 8000, panelClass: ['snackbar-error'] });
      }
    });
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
