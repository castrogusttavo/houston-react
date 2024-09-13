import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Structure01Icon({
  iconName = 'structure-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
