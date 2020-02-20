export const hasPermission = (user, permission) => {
  if (!user) {
    console.error(`No user supplied to hasPermission function`)
    return false
  }
  if (!permission) {
    console.error(`No permission supplied to hasPermission function`)
    return false
  }
  if (!user.permissions || user.permissions.length < 1) {
    console.error(`No permissions found on user object`)
    return false
  }
  return user.permissions.some(({ value }) => value === permission)
}

export default hasPermission
