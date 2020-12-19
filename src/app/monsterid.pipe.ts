import { Pipe, PipeTransform } from '@angular/core';
import { hash } from './hash';

@Pipe({ name: 'monsterid', pure: true })
export class MonsterIdPipe implements PipeTransform {
  transform(value: string) {
    return getAvatarUrl(value);
  }
}

export async function getAvatarUrl(email: string, size = 100): Promise<string> {
  const hashCode = await hash(email);
  return `http://www.gravatar.com/avatar/${hashCode}?s=${size}&r=g&d=monsterid`;
}
