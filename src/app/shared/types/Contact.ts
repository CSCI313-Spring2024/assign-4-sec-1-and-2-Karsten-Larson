import * as uuid from 'uuid';

export class Contact {
  private _id!: string;

  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public phoneNumber: string = '',
    public email: string = ''
  ) {
    this._id = uuid.v4();
  }

  get id(): string {
    return this._id;
  }

  clone(): Contact {
    const contact = new Contact(
      this.firstName,
      this.lastName,
      this.phoneNumber,
      this.email
    );
    contact._id = this._id;
    return contact;
  }
}
