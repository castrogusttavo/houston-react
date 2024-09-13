import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextAlignJustifyLeftIcon({
  iconName = 'text-align-justify-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
