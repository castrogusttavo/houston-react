import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SortingUpIcon({
  iconName = 'sorting-up',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
