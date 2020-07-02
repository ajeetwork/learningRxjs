// Discard emitted values that take less than the specified time between output
// Emits a value from the source Observable only after a particular time span has passed without another source emission.

import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

export default function debounceWrapper() {
  // elem ref
  const searchBox = document.getElementById('search');

  // streams
  const keyup$ = fromEvent(searchBox, 'keyup');

  // wait .5s between keyups to emit current value
  keyup$
    .pipe(
      map((i: any) => i.currentTarget.value),
      debounceTime(500)
    )
    .subscribe(console.log);
}
