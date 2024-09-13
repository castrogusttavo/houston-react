import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PassportValidIcon({
  iconName = 'passport-valid',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
