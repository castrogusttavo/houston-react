import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Minimize01Icon({
  iconName = 'minimize-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
