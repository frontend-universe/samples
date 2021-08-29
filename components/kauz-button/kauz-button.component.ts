import { EventEmitter, HostBinding, Input, Output, ViewEncapsulation,  } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-kauz-button',
  templateUrl: './kauz-button.component.html',
  styleUrls: ['./kauz-button.component.scss'],
})
export class KauzButtonComponent {
  @Input() variant: string = '';
  @Input() label: string = '';
  @Input() class: string = '';
  @Output() onClick = new EventEmitter();
  
  @HostBinding('class')
	get hosted(): string {
		return [
			'kauz-button',
      this.class
		].join(' ');
	}

  click() {
    this.onClick.emit(true);
  }
}
