import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Dumbbell01Icon({
  iconName = 'dumbbell-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
