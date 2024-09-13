import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Backward01Icon({
  iconName = 'backward-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
