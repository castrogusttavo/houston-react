import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CollectionsBookmarkIcon({
  iconName = 'collections-bookmark',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
