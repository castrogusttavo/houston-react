import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlimSlateIcon({
  iconName = 'flim-slate',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
