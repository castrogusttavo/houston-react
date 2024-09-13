import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookmarkBlock01Icon({
  iconName = 'bookmark-block-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
