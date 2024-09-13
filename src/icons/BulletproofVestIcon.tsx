import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BulletproofVestIcon({
  iconName = 'bulletproof-vest',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
