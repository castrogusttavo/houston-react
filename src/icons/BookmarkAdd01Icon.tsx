import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookmarkAdd01Icon({
  iconName = 'bookmark-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
