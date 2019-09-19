import {Directive, Host, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {GridComponent} from '../components/grid/grid.component';

@Directive({
  selector: 'grid[formControlName]',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: FormGridDirective, multi: true }],
})
export class FormGridDirective implements OnInit, OnDestroy, ControlValueAccessor {
  private onChange: (_: any) => void;
  private subscription = Subscription.EMPTY;

  constructor(@Host() readonly grid: GridComponent) {
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public writeValue(obj: any): void {
    this.grid.data = obj;
  }

  public ngOnInit(): void {
    this.subscription = this.grid.dataChange.subscribe((data) => {
      this.onChange(data);
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
