import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookmarkMinus01Icon({
  iconName = 'bookmark-minus-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
