import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  async setValue(key: string, value: any) {
    await Storage.set({
      key: key,
      value: JSON.stringify(value),
    });
  }

  async getValue(key: string) {
    return await Storage.get({ key: key }).then((val) => {
      return JSON.parse(val.value);
    });
  }

  async removeValue(key: string) {
    return await Storage.remove({ key: key });
  }
}
