import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AppleFinderIcon({
  iconName = 'apple-finder',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
