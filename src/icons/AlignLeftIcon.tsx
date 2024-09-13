import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignLeftIcon({
  iconName = 'align-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
