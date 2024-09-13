import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PackageSentIcon({
  iconName = 'package-sent',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
