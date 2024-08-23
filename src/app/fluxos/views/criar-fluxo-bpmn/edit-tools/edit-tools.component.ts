import {  Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-tools',
  templateUrl: './edit-tools.component.html',
  styleUrl: './edit-tools.component.css'
})
export class EditToolsComponent {
  @Output() onUndo = new EventEmitter();
  @Output() onRedo = new EventEmitter();
  @Output() onZoomReset = new EventEmitter();
  @Output() onZoomIn = new EventEmitter();
  @Output() onZoomOut = new EventEmitter();
  @Output() onSave = new EventEmitter();
  @Output() onDownloadXml = new EventEmitter();
  @Output() onDownloadSvg = new EventEmitter();

  _onUndo() {
    this.onUndo.emit();
  }
  _onRedo() {
    this.onRedo.emit();
  }
  _onZoomReset() {
    this.onZoomReset.emit();
  }
  _onZoomIn() {
    this.onZoomIn.emit();
  }
  _onZoomOut() {
    this.onZoomOut.emit();
  }
  _onSave() {
    this.onSave.emit();
  }
  _onDownloadXml() {
    this.onDownloadXml.emit();
  }
  _onDownloadSvg() {
    this.onDownloadSvg.emit();
  }
}
