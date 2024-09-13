import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserShield01Icon({
  iconName = 'user-shield-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
