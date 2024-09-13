import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Infinity01Icon({
  iconName = 'infinity-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
