let delays = process.argv.slice(2);
for (const delay of delays) {
  if (delay > 0 && isNaN(delay) !== true) {
    setTimeout(() => {console.log('\r' + delay + '  ');
  }, delay * 1000);
  }
}
// process.stdout.write('\x07');
