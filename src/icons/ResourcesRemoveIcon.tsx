import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ResourcesRemoveIcon({
  iconName = 'resources-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
