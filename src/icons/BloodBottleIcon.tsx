import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BloodBottleIcon({
  iconName = 'blood-bottle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
