import Theme from "../../theme"

const base = {
  fontFamily: Theme.typography.primary,
  fontSize: 14
}
const baseMedium = {
  fontFamily: Theme.typography.primaryMedium
}
const baseBold = {
  fontFamily: Theme.typography.primaryBold
}
const textPresets = {
  p: {
    ...base,
  },
  small: {
    ...base,
  },
  strong: {
    ...baseMedium,
  },
  h1: {
    ...baseBold,
  },
  h2: {
    ...baseBold,
  },
  h3: {
    ...baseBold,
  },
  h4: {
    ...baseBold,
  },
  h5: {
    ...baseBold,
  },
  h6: {
    ...baseBold,
  }
}

export default textPresets