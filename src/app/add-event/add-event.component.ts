import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Participant } from '../participant';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  title: string;
  description: string;
  date: number;
  time: string;

  firstParticipant: Participant;
  otherParticipants: Array<Participant>;

  constructor(public dialogRef: MatDialogRef<AddEventComponent>) {
    this.firstParticipant = {
      firstName: '',
      lastName: '',
    };
    this.otherParticipants = [];
  }

  onAddParticipant() {
    this.otherParticipants.push({
      firstName: '',
      lastName: '',
    });
  }

  onRemoveParticipant(index) {
    this.otherParticipants.splice(index, 1);
  }

  onSave() {
    const { title, description, date, time } = this;

    if (!title || !description || !date || !time || !this.firstParticipant ||
      !this.firstParticipant.firstName || !this.firstParticipant.lastName ||
      !this.otherParticipants.every((participant) => !!participant.firstName && !!participant.lastName)) {
      return;
    }

    const event = {
      title,
      description,
      date: +date,
      time,
      participants: [this.firstParticipant].concat(this.otherParticipants),
    };

    this.dialogRef.close(event);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
