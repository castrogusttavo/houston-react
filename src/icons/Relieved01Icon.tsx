import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Relieved01Icon({
  iconName = 'relieved-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
