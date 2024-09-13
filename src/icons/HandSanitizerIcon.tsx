import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HandSanitizerIcon({
  iconName = 'hand-sanitizer',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
