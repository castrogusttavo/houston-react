import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserStoryIcon({
  iconName = 'user-story',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
