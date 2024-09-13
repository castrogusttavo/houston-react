import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BloodTypeIcon({
  iconName = 'blood-type',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
