import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImportantBookIcon({
  iconName = 'important-book',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
