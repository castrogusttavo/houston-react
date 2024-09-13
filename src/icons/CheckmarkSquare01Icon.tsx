import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckmarkSquare01Icon({
  iconName = 'checkmark-square-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
