import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Building01Icon({
  iconName = 'building-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
