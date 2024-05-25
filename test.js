function getStyles(prefix, classes) {
  return classes.map(cls => `${prefix}${cls}`).join(' ')
}

console.log(getStyles('before:', ['content-[""]', 'h-1']))
