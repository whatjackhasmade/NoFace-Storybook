export const hasRequirement = (user, requirement) => {
  if (!user) {
    console.error(`No user supplied to hasRequirement function`)
    return false
  }
  const { requirements } = user
  if (!requirement) return requirements.length > 0
  if (!requirements || requirements.length < 1) return false
  return requirements.some(({ title }) => title === requirement)
}

export default hasRequirement
