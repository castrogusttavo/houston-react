import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Trolley01Icon({
  iconName = 'trolley-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
