import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LogoutCircle01Icon({
  iconName = 'logout-circle-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
