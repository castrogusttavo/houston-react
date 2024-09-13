import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Factory01Icon({
  iconName = 'factory-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
