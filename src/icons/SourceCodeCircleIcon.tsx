import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SourceCodeCircleIcon({
  iconName = 'source-code-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
