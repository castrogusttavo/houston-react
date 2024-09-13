import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SofaSingleIcon({
  iconName = 'sofa-single',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
