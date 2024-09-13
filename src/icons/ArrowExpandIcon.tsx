import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowExpandIcon({
  iconName = 'arrow-expand',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
