import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ResourcesAddIcon({
  iconName = 'resources-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
