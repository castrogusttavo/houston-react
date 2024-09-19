import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RecoveryMailIcon({
  iconName = 'recovery-mail',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
