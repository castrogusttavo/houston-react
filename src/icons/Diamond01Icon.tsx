import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Diamond01Icon({
  iconName = 'diamond-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
