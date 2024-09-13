import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LinkSquare01Icon({
  iconName = 'link-square-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
